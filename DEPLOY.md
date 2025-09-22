# ClueX Game - Hướng dẫn Deploy lên Vercel

## Bước 1: Chuẩn bị
1. Đảm bảo project đã được commit lên Git
2. Tài khoản Vercel (sign up tại vercel.com)
3. Kết nối GitHub với Vercel

## Bước 2: Deploy lên Vercel

### Cách 1: Sử dụng Vercel CLI
```bash
# Cài đặt Vercel CLI
npm i -g vercel

# Login vào Vercel
vercel login

# Deploy project
vercel

# Để set custom domain (cluex-game)
vercel --prod --name cluex-game
```

### Cách 2: Sử dụng Vercel Dashboard
1. Truy cập https://vercel.com/dashboard
2. Click "New Project"
3. Import từ GitHub repository
4. Chọn repository cluex-game
5. Framework preset: Create React App
6. Build command: `npm run build`
7. Output directory: `build`
8. Click "Deploy"

## Bước 3: Cấu hình Custom Domain
1. Trong Vercel dashboard, vào project settings
2. Chọn "Domains"
3. Thêm domain: `cluex-game.vercel.app` hoặc custom domain
4. Cấu hình DNS nếu dùng custom domain

## Bước 4: Environment Variables (nếu cần)
```
REACT_APP_API_URL=your_api_url
REACT_APP_GAME_VERSION=1.0.0
```

## Auto Deploy
Mỗi khi push code lên GitHub, Vercel sẽ tự động deploy lại.

## URLs dự kiến:
- Production: https://cluex-game.vercel.app
- Preview: https://cluex-game-git-main-[username].vercel.app
