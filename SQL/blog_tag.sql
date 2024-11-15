CREATE TABLE IF NOT EXISTS `blog_tags` (
    `blog_id` INT NOT NULL,
    `tag_id` INT NOT NULL,
    FOREIGN KEY (`blog_id`) REFERENCES `blogs`(`id`),
    FOREIGN KEY (`tag_id`) REFERENCES `tags`(`id`),
    PRIMARY KEY (`blog_id`, `tag_id`)
);