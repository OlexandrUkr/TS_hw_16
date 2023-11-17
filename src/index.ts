export class Visitor {
  constructor(
    public name: string,
    public contactInfo: string
  ) {}
}

export class Ticket<T> {
  constructor(
    public type: T,
    public cost: number
  ) {}
}

export class TicketBooth<T> {
  private currentVisitors: Visitor[] = [];
  private clients: Client[] = [];
  private revenue: number = 0;

  sellTicket(visitor: Visitor, ticket: Ticket<T>): void {
    this.currentVisitors.push(visitor);
    this.clients.push(new Client(visitor));
    this.revenue += ticket.cost;
  }

  getRevenue(): number {
    return this.revenue;
  }
}

export class CurrentVisitors {
  private visitors: Visitor[] = [];

  addVisitor(visitor: Visitor): void {
    this.visitors.push(visitor);
  }

  notifyBeforeClosing(): void {
    console.log('Notifying visitors before closing.');
  }

  notifyOnDeparture(): void {
    console.log('Notifying visitors on departure.');
  }
}

export class Client {
  constructor(public visitor: Visitor) {}
}

export class AdvertisingDepartment {
  private clients: Client[] = [];

  constructor(clients: Client[]) {
    this.clients = clients;
  }

  sendNewsAndPromotions(): void {
    console.log('Sending news and promotions to clients.');
  }
}

export class Revenue {
  private dailyRevenue: number = 0;

  updateRevenue(newRevenue: number): void {
    this.dailyRevenue = newRevenue;
  }
}

export class AccountingDepartment {
  private employees: Employee[] = [];
  private animals: Animal[] = [];
  private payments: Payment[] = [];

  generateFinancialReports(): void {
    console.log('Generating financial reports.');
  }
}

export class Administration {
  private employees: Employee[] = [];
  private animals: Animal[] = [];

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  removeEmployee(employee: Employee): void {
    const index = this.employees.indexOf(employee);
    if (index !== -1) {
      this.employees.splice(index, 1);
    }
  }

  addAnimal(animal: Animal): void {
    this.animals.push(animal);
  }

  removeAnimal(animal: Animal): void {
    const index = this.animals.indexOf(animal);
    if (index !== -1) {
      this.animals.splice(index, 1);
    }
  }

  createEventNotification(): void {
    console.log('Creating event notifications.');
  }
}

export class Animal {
  constructor(
    public species: string,
    public name: string,
    public age: number,
    public health: string
  ) {}
}

export class Employee {
  constructor(
    public name: string,
    public position: string
  ) {}
}

export class Budget {
  private totalBudget: number = 0;

  manageBudget(expenses: number): void {
    this.totalBudget -= expenses;
  }

  trackFinances(): void {
    console.log('Tracking finances.');
  }
}

export class Payment {
  constructor(
    public description: string,
    public amount: number
  ) {}
}
