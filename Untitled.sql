CREATE TABLE `users` (
  `id` integer PRIMARY KEY,
  `username` varchar(255),
  `password` varchar(255),
  `role` varchar(255),
  `created_at` timestamp,
  `deleted_at` timestamp
);

CREATE TABLE `tasks` (
  `id` integer PRIMARY KEY,
  `title` varchar(255),
  `body` text COMMENT 'Content of the post',
  `create_user_id` integer,
  `assign_user_id` interger,
  `status_id` integer,
  `priority_id` interger,
  `created_at` timestamp,
  `deleted_at` timestamp
);

CREATE TABLE `status` (
  `id` integer PRIMARY KEY,
  `label` varchar(255)
);

CREATE TABLE `priority` (
  `id` integer PRIMARY KEY,
  `label` varchar(255)
);

ALTER TABLE `tasks` ADD FOREIGN KEY (`status_id`) REFERENCES `status` (`id`);

ALTER TABLE `tasks` ADD FOREIGN KEY (`priority_id`) REFERENCES `priority` (`id`);

ALTER TABLE `tasks` ADD FOREIGN KEY (`create_user_id`) REFERENCES `users` (`id`);

ALTER TABLE `tasks` ADD FOREIGN KEY (`assign_user_id`) REFERENCES `users` (`id`);
