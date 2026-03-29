import {Test, TestingModule}           from '@nestjs/testing';
import {EmployeesActivitiesController} from './employees_activities.controller';
import {v4 as _uuid}                   from 'uuid';
import path                            from 'node:path';
import {ConfigModule}                  from '@nestjs/config';
import {LoggerModule}                  from '../../logger/logger.module';
import {EmployeesActivitiesService}    from './employees_activities.service';
import {OrmFactory}                    from '../../orm/orm-factory/orm-factory.service';
import {OrmModule}                     from '../../orm/orm.module';



jest.mock('uuid', () => ({_uuid: () => Uint8Array.from('mocked')}));

describe('EmployeesActivitiesController', () => {
	let controller: EmployeesActivitiesController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
																		 imports    : [
																			 ConfigModule.forRoot({
																									  envFilePath: path.resolve(
																										  process.cwd(),
																										  './.env'
																									  ),
																								  }),
																			 LoggerModule,
																			 OrmModule,
																		 ],
																		 providers  : [EmployeesActivitiesService],
																		 controllers: [EmployeesActivitiesController],
																	 }).compile();

		controller = module.get<EmployeesActivitiesController>(
			EmployeesActivitiesController,
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
