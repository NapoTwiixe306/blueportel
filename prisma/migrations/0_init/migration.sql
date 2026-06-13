-- CreateTable
CREATE TABLE `Rate` (
    `id` VARCHAR(191) NOT NULL,
    `property` VARCHAR(191) NOT NULL,
    `season` VARCHAR(191) NOT NULL,
    `nightlyCents` INTEGER NOT NULL,
    `minNights` INTEGER NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Rate_property_season_key`(`property`, `season`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reservation` (
    `id` VARCHAR(191) NOT NULL,
    `property` VARCHAR(191) NOT NULL,
    `checkIn` DATE NOT NULL,
    `checkOut` DATE NOT NULL,
    `nights` INTEGER NOT NULL,
    `guests` INTEGER NOT NULL,
    `guestName` VARCHAR(191) NOT NULL,
    `guestEmail` VARCHAR(191) NOT NULL,
    `guestPhone` VARCHAR(191) NULL,
    `message` TEXT NULL,
    `totalCents` INTEGER NOT NULL,
    `depositCents` INTEGER NOT NULL,
    `status` ENUM('PENDING', 'PAID', 'CANCELLED', 'EXPIRED') NOT NULL DEFAULT 'PENDING',
    `molliePaymentId` VARCHAR(191) NULL,
    `mollieRefundId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `expiresAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Reservation_molliePaymentId_key`(`molliePaymentId`),
    INDEX `Reservation_property_status_idx`(`property`, `status`),
    INDEX `Reservation_checkIn_checkOut_idx`(`checkIn`, `checkOut`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

