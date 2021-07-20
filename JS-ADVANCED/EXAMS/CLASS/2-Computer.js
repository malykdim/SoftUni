class Computer {
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = ramMemory; //Number
        this.cpuGHz = cpuGHz; //Number
        this.hddMemory = hddMemory; //Number
        this.taskManager = [];
        this.installedPrograms = [];
    }
    
    installAProgram(name, requiredSpace) {
        if (this.hddMemory < requiredSpace) {
            throw new Error(`There is not enough space on the hard drive`);
        }
        
        const program = {
            name,
            requiredSpace
        };
        
        this.installedPrograms.push(program);
        this.hddMemory -= requiredSpace;
        
        return program;
    }
    
    uninstallAProgram(name) {
        const programIndex = this.installedPrograms.findIndex(p => p.name === name);
        
        if (programIndex === -1) {
            throw new Error('Control panel is not responding');
        }
        
        this.installedPrograms.splice(programIndex, 1);
        this.hddMemory += this.installedPrograms[programIndex].requiredSpace;
        
        return this.installedPrograms;
    }
    
    openAProgram(name) {
        const programIndex = this.installedPrograms.findIndex(p => p.name === name);
        
        if (programIndex === -1) {
            throw new Error(`The ${name} is not recognized`);
        }
        
        const openedProgramIndex = this.taskManager.findIndex(p => p.name === name);
        
        if (openedProgramIndex > -1) {
            throw new Error(`The ${name} is already open`);
        }
        
        let programRequiredSpace = this.installedPrograms[programIndex].requiredSpace
        let ramUsage = (programRequiredSpace / this.ramMemory) * 1.5;
        let cpuUsage = ((programRequiredSpace / this.cpuGHz) / 500) * 1.5;
        
        if ((this.totalRamUsage + ramUsage) >= 100) {
            throw new Error(`${name} caused out of memory exception`);
        }
        
        if ((this.totalCpuUsage + cpuUsage) >= 100) {
            throw new Error(`${name} caused out of cpu exception`);
        }
        
        const program = {
            name,
            ramUsage,
            cpuUsage
        };
        
        this.taskManager.push(program);
        
        return program;
    }
    
    taskManagerView() {
        
        if (this.taskManager.length === 0) {
            return 'All running smooth so far';
        }
        
        return this.taskManager
            .map(p => `Name - ${p.name} | Usage - CPU: ${p.cpuUsage.toFixed(0)}%, RAM: ${p.ramUsage.toFixed(0)}%`)
            .join('\n');
    }
    
    get totalRamUsage() {
        return this.taskManager.reduce((acc, curr) => acc + curr.ramUsage, 0);
    }
    
    get totalCpuUsage() {
        return this.taskManager.reduce((acc, curr) => acc + curr.cpuUsage, 0);
    }
}

// let computer = new Computer(4096, 7.5, 250000);

// computer.installAProgram('Word', 7300);
// computer.installAProgram('Excel', 10240);
// computer.installAProgram('PowerPoint', 12288);
// computer.uninstallAProgram('Word');
// computer.installAProgram('Solitare', 1500);
// computer.openAProgram('Excel');
// computer.openAProgram('Solitare');

// let actualInstalledPrograms = computer.installedPrograms;
// let expectedInstalledPrograms = [
//     { name: 'Excel', requiredSpace: 10240 },
//     { name: 'PowerPoint', requiredSpace: 12288 },
//     { name: 'Solitare', requiredSpace: 1500 }
// ];