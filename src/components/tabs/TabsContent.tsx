import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import Icon from "@/components/ui/icon";

export const CalibrationTab = () => {
  return (
    <TabsContent value="calibration" className="space-y-6 animate-fade-in">
      <Card>
        <CardHeader>
          <CardTitle>Калибровка первой ячейки</CardTitle>
          <CardDescription>Настройка эталонных параметров для проверки</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="reference-id">ID эталонного образца</Label>
                <Input id="reference-id" placeholder="Введите ID образца" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="tolerance">Допуск (мм)</Label>
                <Input id="tolerance" type="number" placeholder="0.5" className="mt-2" />
              </div>
              <div>
                <Label>Точность измерения</Label>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Низкая</span>
                    <span className="text-sm">Высокая</span>
                  </div>
                  <Slider defaultValue={[75]} max={100} step={1} className="w-full" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Card className="bg-slate-50 border-dashed">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon name="Camera" size={32} className="text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Поместите эталонный образец в зону сканирования
                    </p>
                    <Button>
                      <Icon name="Play" size={16} className="mr-2" />
                      Начать калибровку
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Статус калибровки</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>Последняя калибровка:</span>
                    <span className="font-medium">09.12.2025 14:30</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Точность:</span>
                    <Badge variant="default" className="bg-green-500">Отличная</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Следующая калибровка:</span>
                    <span className="font-medium">16.12.2025</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export const CameraTab = () => {
  return (
    <TabsContent value="camera" className="space-y-6 animate-fade-in">
      <Card>
        <CardHeader>
          <CardTitle>Настройки камеры</CardTitle>
          <CardDescription>Параметры изображения и освещения</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <Label>Яркость</Label>
                <div className="mt-4 space-y-2">
                  <Slider defaultValue={[65]} max={100} step={1} />
                  <p className="text-sm text-muted-foreground">Текущее значение: 65%</p>
                </div>
              </div>

              <div>
                <Label>Контрастность</Label>
                <div className="mt-4 space-y-2">
                  <Slider defaultValue={[50]} max={100} step={1} />
                  <p className="text-sm text-muted-foreground">Текущее значение: 50%</p>
                </div>
              </div>

              <div>
                <Label>Экспозиция</Label>
                <div className="mt-4 space-y-2">
                  <Slider defaultValue={[40]} max={100} step={1} />
                  <p className="text-sm text-muted-foreground">Текущее значение: 40%</p>
                </div>
              </div>

              <div>
                <Label>Резкость</Label>
                <div className="mt-4 space-y-2">
                  <Slider defaultValue={[70]} max={100} step={1} />
                  <p className="text-sm text-muted-foreground">Текущее значение: 70%</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="resolution">Разрешение</Label>
                <Select defaultValue="1920x1080">
                  <SelectTrigger id="resolution" className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1280x720">1280 x 720 (HD)</SelectItem>
                    <SelectItem value="1920x1080">1920 x 1080 (Full HD)</SelectItem>
                    <SelectItem value="2560x1440">2560 x 1440 (2K)</SelectItem>
                    <SelectItem value="3840x2160">3840 x 2160 (4K)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="fps">Частота кадров</Label>
                <Select defaultValue="30">
                  <SelectTrigger id="fps" className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 fps</SelectItem>
                    <SelectItem value="30">30 fps</SelectItem>
                    <SelectItem value="60">60 fps</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between py-4 border-t border-b">
                <div>
                  <Label htmlFor="auto-focus">Автофокус</Label>
                  <p className="text-sm text-muted-foreground">Автоматическая настройка фокуса</p>
                </div>
                <Switch id="auto-focus" defaultChecked />
              </div>

              <div className="flex items-center justify-between py-4 border-b">
                <div>
                  <Label htmlFor="hdr">HDR режим</Label>
                  <p className="text-sm text-muted-foreground">Расширенный динамический диапазон</p>
                </div>
                <Switch id="hdr" />
              </div>

              <Button className="w-full">
                <Icon name="Save" size={16} className="mr-2" />
                Сохранить настройки
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export const MonitoringTab = () => {
  return (
    <TabsContent value="monitoring" className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Статус системы</CardTitle>
            <CardDescription>Мониторинг компонентов в реальном времени</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <div>
                  <p className="font-medium">Камера 1</p>
                  <p className="text-sm text-muted-foreground">Активна</p>
                </div>
              </div>
              <Badge variant="default" className="bg-green-500">Онлайн</Badge>
            </div>

            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <div>
                  <p className="font-medium">Камера 2</p>
                  <p className="text-sm text-muted-foreground">Активна</p>
                </div>
              </div>
              <Badge variant="default" className="bg-green-500">Онлайн</Badge>
            </div>

            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
                <div>
                  <p className="font-medium">Освещение</p>
                  <p className="text-sm text-muted-foreground">Требуется настройка</p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-yellow-500 text-white">Внимание</Badge>
            </div>

            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <div>
                  <p className="font-medium">Конвейер</p>
                  <p className="text-sm text-muted-foreground">Работает нормально</p>
                </div>
              </div>
              <Badge variant="default" className="bg-green-500">Онлайн</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Производительность за час</CardTitle>
            <CardDescription>Количество обработанных изделий</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="h-48 flex items-end justify-between gap-2">
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-primary rounded-t-lg" style={{ height: "75%" }} />
                  <span className="text-xs mt-2 text-muted-foreground">14:00</span>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-primary rounded-t-lg" style={{ height: "85%" }} />
                  <span className="text-xs mt-2 text-muted-foreground">15:00</span>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-primary rounded-t-lg" style={{ height: "90%" }} />
                  <span className="text-xs mt-2 text-muted-foreground">16:00</span>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-primary rounded-t-lg" style={{ height: "70%" }} />
                  <span className="text-xs mt-2 text-muted-foreground">17:00</span>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-primary rounded-t-lg" style={{ height: "95%" }} />
                  <span className="text-xs mt-2 text-muted-foreground">18:00</span>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-primary/50 rounded-t-lg" style={{ height: "40%" }} />
                  <span className="text-xs mt-2 text-muted-foreground">19:00</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div>
                  <p className="text-sm text-muted-foreground">Средняя скорость</p>
                  <p className="text-2xl font-bold mt-1">48 шт/ч</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Пиковая нагрузка</p>
                  <p className="text-2xl font-bold mt-1">56 шт/ч</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Журнал событий</CardTitle>
          <CardDescription>Последние системные события</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { time: "18:45:12", type: "info", message: "Калибровка камеры завершена успешно" },
              { time: "18:32:05", type: "warning", message: "Снижение освещенности на 15%" },
              { time: "17:58:22", type: "success", message: "Система перезагружена" },
              { time: "17:23:45", type: "error", message: "Ошибка связи с камерой 2 (устранена)" },
              { time: "16:55:18", type: "info", message: "Начата автоматическая калибровка" },
            ].map((log, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50">
                <span className="text-xs text-muted-foreground font-mono w-20">{log.time}</span>
                {log.type === "error" && (
                  <Icon name="AlertCircle" size={16} className="text-red-500 mt-0.5" />
                )}
                {log.type === "warning" && (
                  <Icon name="AlertTriangle" size={16} className="text-yellow-500 mt-0.5" />
                )}
                {log.type === "success" && (
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mt-0.5" />
                )}
                {log.type === "info" && <Icon name="Info" size={16} className="text-blue-500 mt-0.5" />}
                <span className="text-sm flex-1">{log.message}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export const SettingsTab = () => {
  return (
    <TabsContent value="settings" className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Общие настройки</CardTitle>
            <CardDescription>Основные параметры системы</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="facility">Производственный участок</Label>
              <Select defaultValue="section-1">
                <SelectTrigger id="facility" className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="section-1">Участок 1 - Главный цех</SelectItem>
                  <SelectItem value="section-2">Участок 2 - Цех сборки</SelectItem>
                  <SelectItem value="section-3">Участок 3 - Финишная обработка</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="shift">Смена</Label>
              <Select defaultValue="day">
                <SelectTrigger id="shift" className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">Дневная смена (08:00 - 20:00)</SelectItem>
                  <SelectItem value="night">Ночная смена (20:00 - 08:00)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between py-4 border-t">
              <div>
                <Label htmlFor="auto-report">Автоматические отчёты</Label>
                <p className="text-sm text-muted-foreground">Ежедневная отправка по email</p>
              </div>
              <Switch id="auto-report" defaultChecked />
            </div>

            <div className="flex items-center justify-between py-4 border-t">
              <div>
                <Label htmlFor="notifications">Уведомления</Label>
                <p className="text-sm text-muted-foreground">Оповещения о критических событиях</p>
              </div>
              <Switch id="notifications" defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Критерии проверки</CardTitle>
            <CardDescription>Параметры контроля качества</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="defect-sensitivity">Чувствительность к дефектам</Label>
              <Select defaultValue="high">
                <SelectTrigger id="defect-sensitivity" className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Низкая</SelectItem>
                  <SelectItem value="medium">Средняя</SelectItem>
                  <SelectItem value="high">Высокая</SelectItem>
                  <SelectItem value="ultra">Ультравысокая</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="min-quality">Минимальный порог качества (%)</Label>
              <Input id="min-quality" type="number" defaultValue="95" className="mt-2" />
            </div>

            <div>
              <Label>Критичные зоны проверки</Label>
              <div className="space-y-3 mt-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="zone-edges" className="font-normal">Кромки</Label>
                  <Switch id="zone-edges" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="zone-surface" className="font-normal">Поверхность</Label>
                  <Switch id="zone-surface" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="zone-corners" className="font-normal">Углы</Label>
                  <Switch id="zone-corners" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="zone-holes" className="font-normal">Отверстия</Label>
                  <Switch id="zone-holes" />
                </div>
              </div>
            </div>

            <Button className="w-full mt-4">
              <Icon name="Save" size={16} className="mr-2" />
              Применить настройки
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Экспорт данных</CardTitle>
            <CardDescription>Настройки автоматического экспорта</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="export-format">Формат по умолчанию</Label>
              <Select defaultValue="excel">
                <SelectTrigger id="export-format" className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excel">Excel (.xlsx)</SelectItem>
                  <SelectItem value="pdf">PDF (.pdf)</SelectItem>
                  <SelectItem value="csv">CSV (.csv)</SelectItem>
                  <SelectItem value="json">JSON (.json)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="export-frequency">Частота экспорта</Label>
              <Select defaultValue="daily">
                <SelectTrigger id="export-frequency" className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hourly">Каждый час</SelectItem>
                  <SelectItem value="daily">Ежедневно</SelectItem>
                  <SelectItem value="weekly">Еженедельно</SelectItem>
                  <SelectItem value="monthly">Ежемесячно</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between py-4 border-t">
              <div>
                <Label htmlFor="include-images">Включать изображения</Label>
                <p className="text-sm text-muted-foreground">Снимки дефектов в отчёте</p>
              </div>
              <Switch id="include-images" />
            </div>

            <Button variant="outline" className="w-full">
              <Icon name="Download" size={16} className="mr-2" />
              Экспортировать сейчас
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Обслуживание системы</CardTitle>
            <CardDescription>Техническое обслуживание</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-start">
              <Icon name="RotateCw" size={16} className="mr-2" />
              Перезапустить систему
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Icon name="Database" size={16} className="mr-2" />
              Очистить кэш данных
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Icon name="FileDown" size={16} className="mr-2" />
              Экспорт логов системы
            </Button>
            <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
              <Icon name="AlertTriangle" size={16} className="mr-2" />
              Сброс до заводских настроек
            </Button>

            <div className="pt-4 border-t mt-6">
              <p className="text-sm text-muted-foreground">Версия системы: 2.4.1</p>
              <p className="text-sm text-muted-foreground">Последнее обновление: 01.12.2025</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  );
};
