import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SmileBeam, SmileBeamPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/SmileBeam",
  component: SmileBeam,
} as ComponentMeta<typeof SmileBeam>;

const Template: ComponentStory<typeof SmileBeam> = (args: SmileBeamPropsI) => (
  <x.div display="flex" gap="20px">
    <SmileBeam {...args} />
    <SmileBeam {...args} fill="red.500" />
    <SmileBeam {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
