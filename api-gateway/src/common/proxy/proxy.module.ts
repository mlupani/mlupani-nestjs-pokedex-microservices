import { Module } from '@nestjs/common';
import { ClientProxyApp } from './client-proxy';

@Module({
  providers: [ClientProxyApp],
  exports: [ClientProxyApp],
})
export class ProxyModule {}
