export interface Customer {
  id: number;
  dateCreated: Date;
  userCreated: number;
  dateChanged: Date;
  userChanged: number;
  name: string;
  street?: string;
  city?: string;
  state?: string;
  email?: string;
  statusID: string;
}
