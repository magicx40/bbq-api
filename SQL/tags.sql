CREATE TABLE IF NOT EXISTS `tags` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(50) NOT NULL UNIQUE,
    `icon` TEXT NULL,
    `icon_dark` TEXT NULL,
    `type_id` INT NOT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (`type_id`) REFERENCES `tag_types`(`id`)
);
-- ALTER TABLE `tags`
-- ADD COLUMN `icon` TEXT NULL,
--     ADD COLUMN `icon_dark` TEXT NULL,
--     ADD COLUMN `type_id` INT NOT NULL,
--     ADD CONSTRAINT `fk_tag_type` FOREIGN KEY (`type_id`) REFERENCES `tag_types`(`id`);