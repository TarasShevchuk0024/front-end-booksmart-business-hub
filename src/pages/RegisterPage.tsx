
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

const RegisterPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    password: '',
    confirmPassword: '',
    type: 'USER'
  });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register attempt:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
          <p className="text-gray-600">{t('auth.register.title')}</p>
        </div>

        <Card className="border-blue-100 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-blue-900">{t('nav.register')}</CardTitle>
            <CardDescription>
              {t('auth.register.title')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="first_name">{t('auth.register.firstName')}</Label>
                <Input
                  id="first_name"
                  type="text"
                  placeholder={t('auth.register.firstName')}
                  value={formData.first_name}
                  onChange={(e) => handleInputChange('first_name', e.target.value)}
                  className="border-blue-200 focus:border-blue-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="last_name">{t('auth.register.lastName')}</Label>
                <Input
                  id="last_name"
                  type="text"
                  placeholder={t('auth.register.lastName')}
                  value={formData.last_name}
                  onChange={(e) => handleInputChange('last_name', e.target.value)}
                  className="border-blue-200 focus:border-blue-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t('auth.register.email')}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="border-blue-200 focus:border-blue-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone_number">{t('auth.register.phone')}</Label>
                <Input
                  id="phone_number"
                  type="tel"
                  placeholder="+380501234567"
                  value={formData.phone_number}
                  onChange={(e) => handleInputChange('phone_number', e.target.value)}
                  className="border-blue-200 focus:border-blue-400"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">{t('auth.register.password')}</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder={t('auth.register.password')}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="border-blue-200 focus:border-blue-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">{t('auth.register.confirmPassword')}</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder={t('auth.register.confirmPassword')}
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className="border-blue-200 focus:border-blue-400"
                  required
                />
              </div>

              <div className="space-y-3">
                <Label>{t('auth.register.accountType')}</Label>
                <RadioGroup 
                  value={formData.type} 
                  onValueChange={(value) => handleInputChange('type', value)}
                  className="flex space-x-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="USER" id="user" />
                    <Label htmlFor="user" className="text-sm">{t('auth.register.client')}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ADMIN" id="admin" />
                    <Label htmlFor="admin" className="text-sm">{t('auth.register.business')}</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {t('auth.register.button')}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {t('auth.register.hasAccount')}{' '}
                <Link to="/login" className="text-blue-600 hover:underline font-medium">
                  {t('auth.register.signIn')}
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
