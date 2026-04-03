import {TOrganizationSelect} from "./src/orm/drizzle/drizzle-postgres/schema";



namespace e {
	export interface NestRequest extends Request {
		access_token: string | undefined
		cookies: {
			[key: string]: string
		}
		user_id: string | undefined
		organization_id: string | undefined
		sessionId: string
		session: { organization: TOrganizationSelect | undefined, userId: string }
	}



	export interface NestResponse extends Response {
		cookie(name: string, value: string, options?: CookieOptions): void
	}
}