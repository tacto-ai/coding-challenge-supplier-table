import { Article, Department, User } from '@/api';

export const findContactPerson = (organizationUsers: User[], contactDepartment: Department): User | undefined =>
  organizationUsers.find((user) => contactDepartment && user.departmentIds.includes(contactDepartment.id));

export const findSupplierArticles = (articles: Article[], organizationId: number): Article[] =>
  articles.filter((article) => article.suppliedBy.includes(organizationId));

export const findInRiskArticles = (supplierArticles: Article[]): Article[] => supplierArticles.filter((article) => article.suppliedBy.length === 1);
