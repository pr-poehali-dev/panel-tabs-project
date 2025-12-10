import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";
import Header from "@/components/Header";
import StatsCards from "@/components/StatsCards";
import InspectionTab from "@/components/tabs/InspectionTab";
import { CalibrationTab, CameraTab, MonitoringTab, SettingsTab } from "@/components/tabs/TabsContent";

const Index = () => {
  const [activeTab, setActiveTab] = useState("inspection");

  const inspectionData = [
    { id: "КРП-001", status: "годен", defects: 0, timestamp: "10:23:45", operator: "Иванов И.И." },
    { id: "КРП-002", status: "брак", defects: 3, timestamp: "10:24:12", operator: "Иванов И.И." },
    { id: "КРП-003", status: "годен", defects: 0, timestamp: "10:25:01", operator: "Петров П.П." },
    { id: "КРП-004", status: "годен", defects: 0, timestamp: "10:26:33", operator: "Иванов И.И." },
    { id: "КРП-005", status: "брак", defects: 2, timestamp: "10:27:18", operator: "Сидоров С.С." },
    { id: "КРП-006", status: "годен", defects: 0, timestamp: "10:28:42", operator: "Петров П.П." },
  ];

  const statsData = {
    total: 156,
    passed: 142,
    failed: 14,
    efficiency: 91.0,
  };

  const handleExport = (format: string) => {
    toast.success(`Экспорт в формат ${format.toUpperCase()} начат`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header onExport={handleExport} />

      <main className="container mx-auto px-6 py-8">
        <StatsCards statsData={statsData} />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white shadow-sm">
            <TabsTrigger value="inspection" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <Icon name="ScanSearch" size={18} className="mr-2" />
              Проверка годности корпусов
            </TabsTrigger>
            <TabsTrigger value="calibration" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <Icon name="Target" size={18} className="mr-2" />
              Калибровка первой ячейки
            </TabsTrigger>
            <TabsTrigger value="camera" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <Icon name="Camera" size={18} className="mr-2" />
              Настройки камеры
            </TabsTrigger>
            <TabsTrigger value="monitoring" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <Icon name="Activity" size={18} className="mr-2" />
              Мониторинг
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <Icon name="Settings" size={18} className="mr-2" />
              Настройки
            </TabsTrigger>
          </TabsList>

          <TabsContent value="inspection" className="space-y-6 animate-fade-in">
            <InspectionTab inspectionData={inspectionData} />
          </TabsContent>

          <CalibrationTab />
          <CameraTab />
          <MonitoringTab />
          <SettingsTab />
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
