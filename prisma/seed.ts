import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.record.createMany({
    data: [
      {
        app_name: 'App 1',
        app_envs: 'Production',
        acct_string: '1234-5678',
        contact_dl: 'contact1@example.com',
        az_group: 'Group A',
        gitlab_url: 'https://gitlab.com/app1',
        glgroup_ow: 'Owner A',
        glgroup_mt: 'Maintainer A',
        glgroup_dv: 'Developer A',
        project_status: 'Active',
      },
      {
        app_name: 'App 2',
        app_envs: 'Development',
        acct_string: '9876-5432',
        contact_dl: 'contact2@example.com',
        az_group: 'Group B',
        gitlab_url: 'https://gitlab.com/app2',
        glgroup_ow: 'Owner B',
        glgroup_mt: 'Maintainer B',
        glgroup_dv: 'Developer B',
        project_status: 'Inactive',
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
