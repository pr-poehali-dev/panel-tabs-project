import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface InspectionTabProps {
  inspectionData: Array<{
    id: string;
    status: string;
    defects: number;
    timestamp: string;
    operator: string;
  }>;
}

const InspectionTab = ({ inspectionData }: InspectionTabProps) => {
  const [cellStates, setCellStates] = useState<Array<'idle' | 'passed' | 'failed'>>(
    Array(18).fill('idle')
  );
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleStart = () => {
    setIsRunning(true);
    setIsPaused(false);
    simulateInspection();
  };

  const handlePause = () => {
    setIsPaused(true);
    setIsRunning(false);
  };

  const handleContinue = () => {
    setIsPaused(false);
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
    setIsPaused(false);
    setCellStates(Array(18).fill('idle'));
  };

  const simulateInspection = () => {
    const newStates = [...cellStates];
    let index = 0;
    const interval = setInterval(() => {
      if (index < 18) {
        newStates[index] = Math.random() > 0.3 ? 'passed' : 'failed';
        setCellStates([...newStates]);
        index++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 800);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Изображение с камеры</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-square bg-slate-100 rounded-lg border-2 border-slate-300 flex items-center justify-center">
              <Icon name="Camera" size={64} className="text-slate-400" />
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-1 flex flex-col justify-center">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Результаты проверки ячеек</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2 mb-6">
                {cellStates.map((state, index) => (
                  <div
                    key={index}
                    className={`
                      aspect-square rounded-lg border-2 flex items-center justify-center font-bold text-lg
                      transition-all duration-300
                      ${state === 'idle' ? 'bg-slate-100 border-slate-300 text-slate-600' : ''}
                      ${state === 'passed' ? 'bg-green-500 border-green-600 text-white' : ''}
                      ${state === 'failed' ? 'bg-red-500 border-red-600 text-white' : ''}
                    `}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                <Button 
                  onClick={handleStart} 
                  disabled={isRunning || isPaused}
                  className="flex-1 min-w-[100px]"
                >
                  <Icon name="Play" size={16} className="mr-2" />
                  Запуск
                </Button>
                <Button 
                  onClick={handlePause} 
                  disabled={!isRunning}
                  variant="outline"
                  className="flex-1 min-w-[100px]"
                >
                  <Icon name="Pause" size={16} className="mr-2" />
                  Пауза
                </Button>
                <Button 
                  onClick={handleContinue} 
                  disabled={!isPaused}
                  variant="outline"
                  className="flex-1 min-w-[100px]"
                >
                  <Icon name="PlayCircle" size={16} className="mr-2" />
                  Продолжить
                </Button>
                <Button 
                  onClick={handleStop}
                  variant="destructive"
                  className="flex-1 min-w-[100px]"
                >
                  <Icon name="Square" size={16} className="mr-2" />
                  Стоп
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Обнаружение дефектов</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-square bg-slate-100 rounded-lg border-2 border-slate-300 flex items-center justify-center">
              <Icon name="ScanSearch" size={64} className="text-slate-400" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InspectionTab;
