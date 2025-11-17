import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TripsManager from './admin/TripsManager';
import TestimonialsManager from './admin/TestimonialsManager';
import { Settings, Ship, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { exportData, resetToDefault } from '@/lib/storage';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('trips');

  const handleExport = () => {
    const data = exportData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `voyagevista-export-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all data to defaults? This cannot be undone.')) {
      resetToDefault();
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Settings className="h-6 w-6 text-primary" />
              <h1 className="text-2xl font-bold">Admin Panel</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={handleExport}>
                Export Data
              </Button>
              <Button variant="destructive" onClick={handleReset}>
                Reset to Defaults
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="trips" className="flex items-center gap-2">
              <Ship className="h-4 w-4" />
              Trips
            </TabsTrigger>
            <TabsTrigger value="testimonials" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Testimonials
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trips" className="mt-6">
            <TripsManager />
          </TabsContent>

          <TabsContent value="testimonials" className="mt-6">
            <TestimonialsManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
