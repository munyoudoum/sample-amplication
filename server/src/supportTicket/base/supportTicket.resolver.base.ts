/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateSupportTicketArgs } from "./CreateSupportTicketArgs";
import { UpdateSupportTicketArgs } from "./UpdateSupportTicketArgs";
import { DeleteSupportTicketArgs } from "./DeleteSupportTicketArgs";
import { SupportTicketFindManyArgs } from "./SupportTicketFindManyArgs";
import { SupportTicketFindUniqueArgs } from "./SupportTicketFindUniqueArgs";
import { SupportTicket } from "./SupportTicket";
import { SupportTicketService } from "../supportTicket.service";

@graphql.Resolver(() => SupportTicket)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SupportTicketResolverBase {
  constructor(
    protected readonly service: SupportTicketService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SupportTicket",
    action: "read",
    possession: "any",
  })
  async _supportTicketsMeta(
    @graphql.Args() args: SupportTicketFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [SupportTicket])
  @nestAccessControl.UseRoles({
    resource: "SupportTicket",
    action: "read",
    possession: "any",
  })
  async supportTickets(
    @graphql.Args() args: SupportTicketFindManyArgs
  ): Promise<SupportTicket[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SupportTicket, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SupportTicket",
    action: "read",
    possession: "own",
  })
  async supportTicket(
    @graphql.Args() args: SupportTicketFindUniqueArgs
  ): Promise<SupportTicket | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SupportTicket)
  @nestAccessControl.UseRoles({
    resource: "SupportTicket",
    action: "create",
    possession: "any",
  })
  async createSupportTicket(
    @graphql.Args() args: CreateSupportTicketArgs
  ): Promise<SupportTicket> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SupportTicket)
  @nestAccessControl.UseRoles({
    resource: "SupportTicket",
    action: "update",
    possession: "any",
  })
  async updateSupportTicket(
    @graphql.Args() args: UpdateSupportTicketArgs
  ): Promise<SupportTicket | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => SupportTicket)
  @nestAccessControl.UseRoles({
    resource: "SupportTicket",
    action: "delete",
    possession: "any",
  })
  async deleteSupportTicket(
    @graphql.Args() args: DeleteSupportTicketArgs
  ): Promise<SupportTicket | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
