import {ICacheDriver}        from '../cache/interface.cache';
import {TOrganizationSelect} from '../orm/drizzle/drizzle-postgres/schema';



export interface ISessionStore {
	getDriver(): ICacheDriver;

	getSession(id: string): { organization: TOrganizationSelect | undefined; userId: string } | undefined;

	setSession(
		id: string,
		buffer: { organization: TOrganizationSelect | undefined; userId: string }
	): boolean | undefined;

	deleteSession(id: string): boolean | undefined;
}
