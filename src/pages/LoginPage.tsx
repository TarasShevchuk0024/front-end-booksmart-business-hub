
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { apiService } from '@/services/api';
import { toast } from '@/hooks/use-toast';

const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await apiService.login({ email, password });
      localStorage.setItem('auth_token', response.token);
      
      // Get current user info to determine dashboard
      const userInfo = await apiService.getCurrentUser();
      
      toast({
        title: t('auth.login.success'),
        description: t('auth.login.welcome'),
      });
      
      // Navigate based on user type
      if (userInfo.type === 'BUSINESS_OWNER') {
        navigate('/business-dashboard');
      } else {
        navigate('/client-dashboard');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: t('auth.login.error'),
        description: t('auth.login.invalidCredentials'),
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Language Switcher */}
        <div className="mb-4 flex justify-end">
          <LanguageSwitcher />
        </div>
        
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('app.title')}
            </h1>
          </Link>
          <p className="text-gray-600">{t('auth.login.title')}</p>
        </div>

        <Card className="border-blue-100 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-blue-900">{t('nav.login')}</CardTitle>
            <CardDescription>
              {t('auth.login.title')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">{t('auth.login.email')}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-blue-200 focus:border-blue-400"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">{t('auth.login.password')}</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder={t('auth.login.password')}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-blue-200 focus:border-blue-400"
                  required
                />
              </div>

              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {isLoading ? t('auth.login.loading') : t('auth.login.button')}
              </Button>
            </form>

            <div className="mt-6 text-center space-y-4">
              <Link to="/reset-password" className="text-sm text-blue-600 hover:underline">
                {t('auth.login.forgotPassword')}
              </Link>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">або</span>
                </div>
              </div>

              <p className="text-sm text-gray-600">
                {t('auth.login.noAccount')}{' '}
                <Link to="/register" className="text-blue-600 hover:underline font-medium">
                  {t('auth.login.createAccount')}
                </Link>
              </p>
            </div>

            {/* Demo accounts */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm font-medium text-blue-900 mb-2">{t('auth.login.demoCredentials')}</p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('auth.register.client')}:</span>
                  <span className="text-gray-800">client@demo.com / demo123</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('auth.register.business')}:</span>
                  <span className="text-gray-800">business@demo.com / demo123</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
