export interface FirebaseChecker {
  amount: number;
  created: string;
}

export interface Checker extends FirebaseChecker {
  id: string;
}
