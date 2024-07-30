-- AlterTable
ALTER TABLE `pembayaran` MODIFY `client_id` VARCHAR(191) NOT NULL,
    MODIFY `trx_amount` VARCHAR(191) NOT NULL,
    MODIFY `virtual_account` VARCHAR(191) NOT NULL;
