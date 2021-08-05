import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BriefcaseAlt, BriefcaseAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/BriefcaseAlt",
  component: BriefcaseAlt,
} as ComponentMeta<typeof BriefcaseAlt>;

const Template: ComponentStory<typeof BriefcaseAlt> = (
  args: BriefcaseAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <BriefcaseAlt {...args} />
    <BriefcaseAlt {...args} fill="red.500" />
    <BriefcaseAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
