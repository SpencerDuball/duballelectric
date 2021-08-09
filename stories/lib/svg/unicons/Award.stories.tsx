import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Award, AwardPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Award",
  component: Award,
} as ComponentMeta<typeof Award>;

const Template: ComponentStory<typeof Award> = (args: AwardPropsI) => (
  <x.div display="flex" gap="20px">
    <Award {...args} />
    <Award {...args} fill="red.500" />
    <Award {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
