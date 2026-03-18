import {Test, TestingModule}      from '@nestjs/testing';
import {SessionMiddlewareService} from './session.middleware.service';



describe('SessionMiddlewareService', () => {
	let service: SessionMiddlewareService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
																		 providers: [SessionMiddlewareService],
																	 }).compile();

		service = module.get<SessionMiddlewareService>(SessionMiddlewareService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
