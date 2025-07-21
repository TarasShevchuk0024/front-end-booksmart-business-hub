
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('app.title')}
            </h1>
          </div>
          <div className="flex items-center space-x-3">
            <LanguageSwitcher />
            <Link to="/login">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                {t('nav.login')}
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                {t('nav.register')}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('hero.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/client-dashboard">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                {t('hero.clientCta')}
              </Button>
            </Link>
            <Link to="/business-dashboard">
              <Button size="lg" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                {t('hero.businessCta')}
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="border-blue-100 hover:shadow-lg transition-shadow duration-300 hover:border-blue-200">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg text-blue-900">{t('features.booking.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                {t('features.booking.description')}
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-blue-100 hover:shadow-lg transition-shadow duration-300 hover:border-blue-200">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-lg text-blue-900">{t('features.scheduling.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                {t('features.scheduling.description')}
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-blue-100 hover:shadow-lg transition-shadow duration-300 hover:border-blue-200">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg text-blue-900">{t('features.analytics.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                {t('features.analytics.description')}
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-blue-100 hover:shadow-lg transition-shadow duration-300 hover:border-blue-200">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-lg text-blue-900">{t('features.notifications.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                {t('features.notifications.description')}
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Demo Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <h3 className="text-2xl font-bold mb-2">{t('demo.title')}</h3>
            <p className="text-blue-100">{t('demo.subtitle')}</p>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800">{t('demo.client.title')}</h4>
                <p className="text-gray-600">{t('demo.client.description')}</p>
                <Link to="/client-dashboard">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    {t('demo.client.cta')}
                  </Button>
                </Link>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800">{t('demo.business.title')}</h4>
                <p className="text-gray-600">{t('demo.business.description')}</p>
                <Link to="/business-dashboard">
                  <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                    {t('demo.business.cta')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>{t('footer.copyright')}</p>
          <p className="mt-2 text-sm">{t('footer.description')}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
