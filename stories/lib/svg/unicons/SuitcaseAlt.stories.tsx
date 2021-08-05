import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SuitcaseAlt, SuitcaseAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/SuitcaseAlt",
  component: SuitcaseAlt,
} as ComponentMeta<typeof SuitcaseAlt>;

const Template: ComponentStory<typeof SuitcaseAlt> = (
  args: SuitcaseAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <SuitcaseAlt {...args} />
    <SuitcaseAlt {...args} fill="red.500" />
    <SuitcaseAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
