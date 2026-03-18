import {Test, TestingModule}   from '@nestjs/testing';
import {AuthMiddlewareService} from './auth.middleware.service';



describe('AuthMiddlewareService', () => {
	let service: AuthMiddlewareService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
																		 providers: [AuthMiddlewareService],
																	 }).compile();

		service = module.get<AuthMiddlewareService>(AuthMiddlewareService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
