
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'USER'
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
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              BookEasy
            </h1>
          </Link>
          <p className="text-gray-600">Створіть новий обліковий запис</p>
        </div>

        <Card className="border-blue-100 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-blue-900">Реєстрація</CardTitle>
            <CardDescription>
              Заповніть форму для створення облікового запису
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Повне ім'я</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Ваше повне ім'я"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="border-blue-200 focus:border-blue-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
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
                <Label htmlFor="password">Пароль</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Створіть пароль"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="border-blue-200 focus:border-blue-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Підтвердіть пароль</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Повторіть пароль"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className="border-blue-200 focus:border-blue-400"
                  required
                />
              </div>

              <div className="space-y-3">
                <Label>Тип облікового запису</Label>
                <RadioGroup 
                  value={formData.role} 
                  onValueChange={(value) => handleInputChange('role', value)}
                  className="flex space-x-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="USER" id="user" />
                    <Label htmlFor="user" className="text-sm">Клієнт</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="BUSINESS" id="business" />
                    <Label htmlFor="business" className="text-sm">Власник бізнесу</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Створити обліковий запис
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Вже маєте обліковий запис?{' '}
                <Link to="/login" className="text-blue-600 hover:underline font-medium">
                  Увійти
                </Link>
              </p>
            </div>

            {/* Info about account types */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm font-medium text-blue-900 mb-2">Типи облікових записів:</p>
              <div className="space-y-1 text-xs text-gray-600">
                <p><strong>Клієнт:</strong> Бронювання послуг, перегляд історії</p>
                <p><strong>Власник бізнесу:</strong> Керування послугами, бронюваннями та аналітика</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
