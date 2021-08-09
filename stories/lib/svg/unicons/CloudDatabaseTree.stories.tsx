import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudDatabaseTree, CloudDatabaseTreePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudDatabaseTree",
  component: CloudDatabaseTree,
} as ComponentMeta<typeof CloudDatabaseTree>;

const Template: ComponentStory<typeof CloudDatabaseTree> = (
  args: CloudDatabaseTreePropsI
) => (
  <x.div display="flex" gap="20px">
    <CloudDatabaseTree {...args} />
    <CloudDatabaseTree {...args} fill="red.500" />
    <CloudDatabaseTree {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
