import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudMoonShowers, CloudMoonShowersPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudMoonShowers",
  component: CloudMoonShowers,
} as ComponentMeta<typeof CloudMoonShowers>;

const Template: ComponentStory<typeof CloudMoonShowers> = (
  args: CloudMoonShowersPropsI
) => (
  <x.div display="flex" gap="20px">
    <CloudMoonShowers {...args} />
    <CloudMoonShowers {...args} fill="red.500" />
    <CloudMoonShowers {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
