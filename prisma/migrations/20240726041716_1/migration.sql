-- CreateTable
CREATE TABLE `User` (
    `id_user` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_password_key`(`password`),
    PRIMARY KEY (`id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Class` (
    `id_class` INTEGER NOT NULL AUTO_INCREMENT,
    `class_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_class`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Student` (
    `id_student` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `birthplace` VARCHAR(191) NOT NULL,
    `date_birth` DATETIME(3) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `religion` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `number_phone` VARCHAR(191) NOT NULL,
    `classId` INTEGER NOT NULL,

    INDEX `classId`(`classId`),
    PRIMARY KEY (`id_student`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_classId_fkey` FOREIGN KEY (`classId`) REFERENCES `Class`(`id_class`) ON DELETE RESTRICT ON UPDATE CASCADE;
