import {Test, TestingModule}        from '@nestjs/testing';
import {EmployeesActivitiesService} from './employees_activities.service';
import {v4 as _uuid}                from 'uuid';
import {ConfigModule}               from '@nestjs/config';
import path                         from 'node:path';
import {OrmModule}                  from '../../orm/orm.module';
import {LoggerModule}               from '../../logger/logger.module';



jest.mock('uuid', () => ({_uuid: () => Uint8Array.from('mocked')}));

describe('EmployeesActivitiesService', () => {
	let service: EmployeesActivitiesService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
																		 imports  : [
																			 ConfigModule.forRoot({
																									  envFilePath: path.resolve(
																										  process.cwd(),
																										  './.env'
																									  ),
																								  }),
																			 OrmModule,
																			 LoggerModule,
																		 ],
																		 providers: [EmployeesActivitiesService],
																	 }).compile();

		service = module.get<EmployeesActivitiesService>(
			EmployeesActivitiesService,
		);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
