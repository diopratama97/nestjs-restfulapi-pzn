import { ZodType, z } from 'zod';

export class UserValidation {
  static readonly REGISTER: ZodType = z.object({
    username: z.string().min(3).max(100),
    password: z.string(),
    name: z.string().min(3).max(100),
  });

  static readonly LOGIN: ZodType = z.object({
    username: z.string().min(3).max(100),
    password: z.string(),
  });

  static readonly UPDATE: ZodType = z.object({
    name: z.string().min(3).max(100).optional(),
    password: z.string().optional(),
  });
}
