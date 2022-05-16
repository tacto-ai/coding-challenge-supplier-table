import { ArticlesApi, Configuration, ConfigurationParameters, DepartmentsApi, OrganizationsApi, UsersApi } from '@/api';

export default class ApiHandler {
  public static OrganizationsAPI: OrganizationsApi;
  public static ArticlesAPI: ArticlesApi;
  public static UsersAPI: UsersApi;
  public static DepartmentsAPI: DepartmentsApi;

  private static isInitialized = false;

  /**
   * Wrapper function for API calls. This wrapper will be
   * later used to handle server errors and network timeouts
   *
   */
  public static async doCall<T>(apiCall: () => Promise<T>): Promise<T> {
    return apiCall();
  }

  public static init(): void {
    if (ApiHandler.isInitialized) {
      return;
    }

    const baseParams: ConfigurationParameters = {
      basePath: 'http://localhost:3001',
    };

    const config = new Configuration(baseParams);

    ApiHandler.OrganizationsAPI = new OrganizationsApi(config);
    ApiHandler.UsersAPI = new UsersApi(config);
    ApiHandler.ArticlesAPI = new ArticlesApi(config);
    ApiHandler.DepartmentsAPI = new DepartmentsApi(config);

    ApiHandler.isInitialized = true;
  }
}
