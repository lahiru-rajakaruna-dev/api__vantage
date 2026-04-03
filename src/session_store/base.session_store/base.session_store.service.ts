import {ICacheDriver}        from '../../cache/interface.cache';
import type ILoggerService   from '../../logger/logger.interface';
import {TOrganizationSelect} from '../../orm/drizzle/drizzle-postgres/schema';
import {ISessionStore}       from '../interface.session_store.service';



export abstract class BaseSessionStoreService implements ISessionStore {
	private readonly logger: ILoggerService;

	constructor(logger: ILoggerService) {
		this.logger = logger;
	}

	abstract getDriver(): ICacheDriver;

	deleteSession(id: string): boolean | undefined {
		return this.getDriver().del(id) !== undefined;
	}

	getSession(id: string): { organization: TOrganizationSelect | undefined; userId: string } | undefined {
		const data = this.getDriver().get(id);
		if (data instanceof Object) {
			return data as { organization: TOrganizationSelect | undefined; userId: string };
		}
		return undefined;
	}

	setSession(id: string, buffer: {
		organization: TOrganizationSelect | undefined;
		userId: string
	}): boolean | undefined {
		return this.getDriver().set(id, buffer) !== undefined;
	}
}
