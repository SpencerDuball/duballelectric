import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudDrizzle, CloudDrizzlePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudDrizzle",
  component: CloudDrizzle,
} as ComponentMeta<typeof CloudDrizzle>;

const Template: ComponentStory<typeof CloudDrizzle> = (
  args: CloudDrizzlePropsI
) => (
  <x.div display="flex" gap="20px">
    <CloudDrizzle {...args} />
    <CloudDrizzle {...args} fill="red.500" />
    <CloudDrizzle {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
