import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { NetworkPostController } from "../networkPost.controller";
import { NetworkPostService } from "../networkPost.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  datePublished: new Date(),
  gif: "exampleGif",
  id: "exampleId",
  image: "exampleImage",
  postId: "examplePostId",
  postText: "examplePostText",
  updatedAt: new Date(),
  video: "exampleVideo",
};
const CREATE_RESULT = {
  createdAt: new Date(),
  datePublished: new Date(),
  gif: "exampleGif",
  id: "exampleId",
  image: "exampleImage",
  postId: "examplePostId",
  postText: "examplePostText",
  updatedAt: new Date(),
  video: "exampleVideo",
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    datePublished: new Date(),
    gif: "exampleGif",
    id: "exampleId",
    image: "exampleImage",
    postId: "examplePostId",
    postText: "examplePostText",
    updatedAt: new Date(),
    video: "exampleVideo",
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  datePublished: new Date(),
  gif: "exampleGif",
  id: "exampleId",
  image: "exampleImage",
  postId: "examplePostId",
  postText: "examplePostText",
  updatedAt: new Date(),
  video: "exampleVideo",
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("NetworkPost", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: NetworkPostService,
          useValue: service,
        },
      ],
      controllers: [NetworkPostController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /networkPosts", async () => {
    await request(app.getHttpServer())
      .post("/networkPosts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        datePublished: CREATE_RESULT.datePublished.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /networkPosts", async () => {
    await request(app.getHttpServer())
      .get("/networkPosts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          datePublished: FIND_MANY_RESULT[0].datePublished.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /networkPosts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/networkPosts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /networkPosts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/networkPosts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        datePublished: FIND_ONE_RESULT.datePublished.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
