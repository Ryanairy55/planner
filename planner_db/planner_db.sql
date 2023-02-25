-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Мар 08 2022 г., 18:55
-- Версия сервера: 10.4.22-MariaDB
-- Версия PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `planner_db`
--

-- --------------------------------------------------------

--
-- Структура таблицы `cards`
--

CREATE TABLE `cards` (
  `thingId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `thingName` varchar(255) NOT NULL,
  `thingDescription` varchar(255) NOT NULL,
  `thingOrder` int(11) NOT NULL,
  `momentNeedsToBeDone` datetime NOT NULL,
  `momentCreated` datetime NOT NULL,
  `deadline` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `cards`
--

INSERT INTO `cards` (`thingId`, `userId`, `categoryId`, `thingName`, `thingDescription`, `thingOrder`, `momentNeedsToBeDone`, `momentCreated`, `deadline`) VALUES
(97, 1, 53, 'Task 1', '', 0, '2022-03-07 09:04:00', '2022-03-07 09:04:00', 0),
(98, 1, 53, 'Task 2', '', 1, '2022-03-07 09:04:00', '2022-03-07 09:04:00', 0),
(99, 1, 53, 'Task 3', '', 2, '2022-03-07 09:41:00', '2022-03-07 09:41:00', 0),
(100, 1, 53, 'Card 4', '', 3, '2022-03-07 09:42:00', '2022-03-07 09:42:00', 0),
(101, 1, 53, 'Card 5', '', 4, '2022-03-07 09:42:00', '2022-03-07 09:42:00', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `category`
--

CREATE TABLE `category` (
  `categoryId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `categoryName` varchar(255) NOT NULL,
  `categoryOrder` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `category`
--

INSERT INTO `category` (`categoryId`, `userId`, `categoryName`, `categoryOrder`) VALUES
(53, 1, 'Category 1', 0),
(57, 1, 'Category 2', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `createdDate` date NOT NULL,
  `password` varchar(255) NOT NULL,
  `pic` varchar(255) NOT NULL,
  `color` varchar(6) NOT NULL,
  `background` varchar(255) NOT NULL,
  `theme` int(11) NOT NULL,
  `session` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`userId`, `nickname`, `email`, `name`, `surname`, `createdDate`, `password`, `pic`, `color`, `background`, `theme`, `session`) VALUES
(1, 'Admin', 'test@gmail.com', 'Maxim', 'Adminov', '2022-01-16', 'abcd', '', '', '', 0, '');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `cards`
--
ALTER TABLE `cards`
  ADD PRIMARY KEY (`thingId`);

--
-- Индексы таблицы `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`categoryId`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `cards`
--
ALTER TABLE `cards`
  MODIFY `thingId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT для таблицы `category`
--
ALTER TABLE `category`
  MODIFY `categoryId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
