import { Module } from '@nestjs/common';
import { NotificationsService } from './services/notifications/notifications.service';
import { NotificationsController } from './controllers/notifications/notifications.controller';

@Module({
  providers: [NotificationsService],
  controllers: [NotificationsController]
})
export class NotificationsModule {}
