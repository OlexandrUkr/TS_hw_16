import {
  Visitor,
  Ticket,
  TicketBooth,
  CurrentVisitors,
  Client,
  AdvertisingDepartment,
  Revenue,
  AccountingDepartment,
  Administration,
  Animal,
  Employee,
  Budget,
  Payment,
} from './index';

describe('Visitor', () => {
  it('create a new Visitor', () => {
    const visitor = new Visitor('Vasyl Rook', 'vasylrook@gmail.com');
    expect(visitor).toBeDefined();
    expect(visitor.name).toBe('Vasyl Rook');
    expect(visitor.contactInfo).toBe('vasylrook@gmail.com');
  });
});

describe('Ticket', () => {
  it('should create a new Ticket', () => {
    const ticket = new Ticket<string>('General', 20);
    expect(ticket).toBeDefined();
    expect(ticket.type).toBe('General');
    expect(ticket.cost).toBe(20);
  });
});

describe('TicketBooth', () => {
  let ticketBooth: TicketBooth<string>;

  beforeEach(() => {
    ticketBooth = new TicketBooth<string>();
  });

  it('should sell a ticket and update revenue', () => {
    const visitor = new Visitor('Anna Duda', 'annaduda@gmail.com');
    const ticket = new Ticket<string>('VIP', 50);

    ticketBooth.sellTicket(visitor, ticket);

    expect(ticketBooth.getRevenue()).toBe(50);
  });
});

describe('CurrentVisitors', () => {
  it('should add a visitor', () => {
    const currentVisitors = new CurrentVisitors();
    const visitor = new Visitor('Vasyl Rook', 'vasylrook@gmail.com');

    currentVisitors.addVisitor(visitor);

    expect(currentVisitors['visitors']).toContain(visitor);
  });

  it('should notify before closing', () => {
    const currentVisitors = new CurrentVisitors();
    const consoleSpy = jest.spyOn(console, 'log');

    currentVisitors.notifyBeforeClosing();

    expect(consoleSpy).toHaveBeenCalledWith('Notifying visitors before closing.');
  });

  it('should notify on departure', () => {
    const currentVisitors = new CurrentVisitors();
    const consoleSpy = jest.spyOn(console, 'log');

    currentVisitors.notifyOnDeparture();

    expect(consoleSpy).toHaveBeenCalledWith('Notifying visitors on departure.');
  });
});

describe('Client', () => {
  it('should create a new Client', () => {
    const visitor = new Visitor('Vasyl Rook', 'vasylrook@gmail.com');
    const client = new Client(visitor);

    expect(client).toBeDefined();
    expect(client.visitor).toBe(visitor);
  });
});

describe('AdvertisingDepartment', () => {
  it('should send news and promotions to clients', () => {
    const clients = [new Client(new Visitor('Vasyl Rook', 'vasylrook@gmail.com'))];
    const advertisingDepartment = new AdvertisingDepartment(clients);
    const consoleSpy = jest.spyOn(console, 'log');

    advertisingDepartment.sendNewsAndPromotions();

    expect(consoleSpy).toHaveBeenCalledWith('Sending news and promotions to clients.');
  });
});

describe('Revenue', () => {
  it('should update daily revenue', () => {
    const revenue = new Revenue();
    const newRevenue = 1000;

    revenue.updateRevenue(newRevenue);

    expect(revenue['dailyRevenue']).toBe(newRevenue);
  });
});

describe('AccountingDepartment', () => {
  it('should generate financial reports', () => {
    const accountingDepartment = new AccountingDepartment();
    const consoleSpy = jest.spyOn(console, 'log');

    accountingDepartment.generateFinancialReports();

    expect(consoleSpy).toHaveBeenCalledWith('Generating financial reports.');
  });
});

describe('Administration', () => {
  it('should add and remove an employee', () => {
    const administration = new Administration();
    const employee = new Employee('Vasyl Rook', 'Manager');

    administration.addEmployee(employee);
    expect(administration['employees']).toContain(employee);

    administration.removeEmployee(employee);
    expect(administration['employees']).not.toContain(employee);
  });

  it('should add and remove an animal', () => {
    const administration = new Administration();
    const animal = new Animal('Tiger', 'Stripes', 5, 'Healthy');

    administration.addAnimal(animal);
    expect(administration['animals']).toContain(animal);

    administration.removeAnimal(animal);
    expect(administration['animals']).not.toContain(animal);
  });

  it('should create an event notification', () => {
    const administration = new Administration();
    const consoleSpy = jest.spyOn(console, 'log');

    administration.createEventNotification();

    expect(consoleSpy).toHaveBeenCalledWith('Creating event notifications.');
  });
});

describe('Animal', () => {
  it('should create a new Animal', () => {
    const animal = new Animal('Lion', 'Leva', 6, 'Healthy');
    expect(animal).toBeDefined();
    expect(animal.species).toBe('Lion');
    expect(animal.name).toBe('Leva');
    expect(animal.age).toBe(6);
    expect(animal.health).toBe('Healthy');
  });
});

describe('Employee', () => {
  it('should create a new Employee', () => {
    const employee = new Employee('Anna Duda', 'Supervisor');
    expect(employee).toBeDefined();
    expect(employee.name).toBe('Anna Duda');
    expect(employee.position).toBe('Supervisor');
  });
});

describe('Budget', () => {
  it('should manage budget and track finances', () => {
    const budget = new Budget();
    const expenses = 500;
    const consoleSpy = jest.spyOn(console, 'log');

    budget.manageBudget(expenses);
    expect(budget['totalBudget']).toBe(-500);

    budget.trackFinances();
    expect(consoleSpy).toHaveBeenCalledWith('Tracking finances.');
  });
});

describe('Payment', () => {
  it('should create a new Payment', () => {
    const payment = new Payment('Salary', 1000);
    expect(payment).toBeDefined();
    expect(payment.description).toBe('Salary');
    expect(payment.amount).toBe(1000);
  });
});
