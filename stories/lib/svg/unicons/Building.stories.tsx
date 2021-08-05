import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Building, BuildingPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Building",
  component: Building,
} as ComponentMeta<typeof Building>;

const Template: ComponentStory<typeof Building> = (args: BuildingPropsI) => (
  <x.div display="flex" gap="20px">
    <Building {...args} />
    <Building {...args} fill="red.500" />
    <Building {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
