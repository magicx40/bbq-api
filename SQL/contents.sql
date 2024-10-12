CREATE TABLE `contents` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `chapter_id` INT NOT NULL,
    `function_name` VARCHAR(255) NOT NULL,
    `explanation` TEXT NOT NULL,
    `example` TEXT NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (`chapter_id`) REFERENCES `chapters`(`id`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
-- 添加索引以优化查询性能。例如，可以在 contents 表的 chapter_id 字段上添加索引
CREATE INDEX idx_chapter_id ON `contents`(`chapter_id`);