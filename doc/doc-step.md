# Step pembuatan restfull api

1. buat project dengan perintah nest new nama_project
2. masuk ke folder yang telah diinstall
3. install zod validation
4. install prisma config db
5. install nest-winston logger
6. install bcrypt
7. install uuid
8. install @nestjs/config
9. buat spesifikasi di dalam folder doc terkait api yang akan dibuat
10. set up prisma dengan npx prisma init
11. buat db dan sesuaikan dengan config prisma
12. buat model di prisma
13. buat migration dengan code npx prisma migrate dev
14. generate prisma client npx prisma generate
15. Hapus kode yang tak digunakan seperti app controller test, controller, service
16. Buat common module, module ini berisi prisma, logging dll. gunakan perintah nest generate module common
17. set up winston module
18. set global logger ke main.ts
19. set up config module
20. set up prisma service
21. set up validation zod
22. set up prisma service dan validation service ke common module
23. buat module. service dan controller user
24. ubah folder test dan package json
25. tambah error filter di common dan tambah ke common module
