import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Servicemark, ServicemarkPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Servicemark",
  component: Servicemark,
} as ComponentMeta<typeof Servicemark>;

const Template: ComponentStory<typeof Servicemark> = (
  args: ServicemarkPropsI
) => (
  <x.div display="flex" gap="20px">
    <Servicemark {...args} />
    <Servicemark {...args} fill="red.500" />
    <Servicemark {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
