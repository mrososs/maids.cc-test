import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { of } from 'rxjs';
import { UsersDashboardComponent } from './users-dashboard.component';
import { UsersService } from '../users.service';

describe('UsersDashboardComponent', () => {
  let component: UsersDashboardComponent;
  let fixture: ComponentFixture<UsersDashboardComponent>;
  let mockUsersService: jasmine.SpyObj<UsersService>;

  beforeEach(async () => {
    // Create a spy object for UsersService
    mockUsersService = jasmine.createSpyObj('UsersService', ['getUsers']);

    await TestBed.configureTestingModule({
      declarations: [UsersDashboardComponent],
      providers: [{ provide: UsersService, useValue: mockUsersService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial values', () => {
    expect(component.totalUsers).toBe(0);
    expect(component.currentPage).toBe(1);
    expect(component.pageSize).toBe(6);
  });

  it('should load users on init', fakeAsync(() => {
    const mockResponse = {
      data: [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
      ],
      total: 2,
    };
    mockUsersService.getUsers.and.returnValue(of(mockResponse));

    component.ngOnInit();
    tick(); // Simulate the passage of time until all pending asynchronous activities complete

    component.users$.subscribe((data) => {
      expect(data).toEqual(mockResponse.data);
    });
    expect(mockUsersService.getUsers).toHaveBeenCalledWith(1);
  }));

  it('should load users for the specified page', fakeAsync(() => {
    const mockResponse = {
      data: [
        { id: 3, name: 'Jim Doe' },
        { id: 4, name: 'Jill Doe' },
      ],
      total: 2,
    };
    mockUsersService.getUsers.and.returnValue(of(mockResponse));

    component.loadUsers(2);
    tick(); // Simulate the passage of time until all pending asynchronous activities complete

    component.users$.subscribe((data) => {
      expect(data).toEqual(mockResponse.data);
    });
    expect(mockUsersService.getUsers).toHaveBeenCalledWith(2);
  }));
});
