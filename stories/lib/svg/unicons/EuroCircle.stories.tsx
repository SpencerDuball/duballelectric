import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { EuroCircle, EuroCirclePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EuroCircle",
  component: EuroCircle,
} as ComponentMeta<typeof EuroCircle>;

const Template: ComponentStory<typeof EuroCircle> = (
  args: EuroCirclePropsI
) => (
  <x.div display="flex" gap="20px">
    <EuroCircle {...args} />
    <EuroCircle {...args} fill="red.500" />
    <EuroCircle {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
