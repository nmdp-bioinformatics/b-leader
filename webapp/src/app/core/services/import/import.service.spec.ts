/*
 * Copyright (c) 2022 Be The Match.
 *
 * This file is part of BLEAT 
 * (see https://github.com/nmdp-bioinformatics/b-leader).
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
import { TestBed } from '@angular/core/testing';

import { ImportService } from './import.service';

describe('ImportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImportService = TestBed.get(ImportService);
    expect(service).toBeTruthy();
  });
});
