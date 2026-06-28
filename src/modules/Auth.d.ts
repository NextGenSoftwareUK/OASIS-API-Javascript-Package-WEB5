// Hand-written type declaration for src/modules/Auth.js
import type { OASISResponse, OASISSession } from '../core/types';

export interface LoginCredentials {
  username: string;
  password: string;
}

export declare class AuthModule {
  constructor(http: unknown, tokenStore: unknown, avatarModule: unknown);
  getSession(): OASISSession | null;
  isAuthenticated(): boolean;
  login(credentials: LoginCredentials): Promise<OASISResponse & { session?: OASISSession }>;
  logout(): Promise<void>;
}
