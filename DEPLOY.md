# ClueX Game - Hướng dẫn Deploy lên Vercel Dashboard

## ✅ Bước 1: Chuẩn bị (ĐÃ HOÀN THÀNH)
- ✅ Project đã được commit lên Git
- ✅ Code đã được push lên GitHub: https://github.com/ngducmiinh/cluex-game
- ✅ Repository đã sẵn sàng deploy

## 🚀 Bước 2: Deploy với Vercel Dashboard

### 2.1. Truy cập Vercel
1. Mở trình duyệt và truy cập: **https://vercel.com**
2. Click **"Login"** ở góc trên bên phải
3. Chọn **"Continue with GitHub"** để đăng nhập bằng GitHub

### 2.2. Tạo Project mới
1. Sau khi đăng nhập, click **"New Project"** 
2. Bạn sẽ thấy danh sách repositories từ GitHub
3. Tìm repository **"cluex-game"** và click **"Import"**

### 2.3. Cấu hình Project
Vercel sẽ tự động detect project settings:
- **Framework Preset**: Create React App ✅
- **Root Directory**: ./ ✅  
- **Build Command**: `npm run build` ✅
- **Output Directory**: build ✅
- **Install Command**: `npm install` ✅

**➡️ Không cần thay đổi gì, click "Deploy"**

### 2.4. Chờ Deploy hoàn thành
- Quá trình build sẽ mất 1-3 phút
- Bạn sẽ thấy log build realtime
- Khi hoàn thành, bạn sẽ thấy màn hình "Congratulations!"

## 🌐 Bước 3: Cấu hình Domain

### 3.1. Domain mặc định
Sau khi deploy, bạn sẽ có URL:
- **Production URL**: `https://cluex-game.vercel.app`
- **Git branch URL**: `https://cluex-game-git-main-ngducmiinh.vercel.app`

### 3.2. Custom Domain (Tùy chọn)
1. Trong dashboard project, click **"Settings"**
2. Chọn **"Domains"** từ sidebar
3. Click **"Add"** và nhập domain: `cluex-game.com`
4. Cấu hình DNS records theo hướng dẫn

## ⚡ Bước 4: Auto Deploy
- Mỗi khi push code mới lên GitHub main branch
- Vercel sẽ tự động trigger deploy mới
- Production URL sẽ được cập nhật tự động

## 🔧 Environment Variables (Nếu cần sau này)
1. Vào **Settings** → **Environment Variables**
2. Thêm variables:
```
REACT_APP_API_URL=your_api_url
REACT_APP_GAME_VERSION=1.0.0
```

## 📱 Test URLs sau khi Deploy:
- **Desktop**: https://cluex-game.vercel.app
- **Mobile**: Mở cùng URL trên điện thoại
- **Responsive Test**: Click nút "Test Responsive" trong app

---

## 🎯 HÀNH ĐỘNG TIẾP THEO:
1. **Mở https://vercel.com** 
2. **Login với GitHub**
3. **Click "New Project"**
4. **Import "cluex-game" repository**
5. **Click "Deploy"**
6. **Chờ 2-3 phút → DONE! 🎉**
